const fs = require("fs");
const path = require("path");
const cloudinary = require("../config/cloudinary");

// Root folder where your product images are stored
const rootFolder = path.resolve(__dirname, "../../frontend/public/assets/product_image");

console.log("📁 Root image folder path:", rootFolder);

// Recursive function to upload all images in subfolders
async function uploadImagesFromFolder(folderPath, cloudinaryFolder = "royalfitz_products") {
  try {
    const items = fs.readdirSync(folderPath);

    for (const item of items) {
      const itemPath = path.join(folderPath, item);
      const stats = fs.statSync(itemPath);

      if (stats.isDirectory()) {
        // Recursively upload images from subfolder
        await uploadImagesFromFolder(itemPath, `${cloudinaryFolder}/${item}`);
      } else if (stats.isFile()) {
        try {
          const result = await cloudinary.uploader.upload(itemPath, {
            folder: cloudinaryFolder,
          });
          console.log(`☁️ Uploaded: ${item} → ${result.secure_url}`);
        } catch (err) {
          console.error(`❌ Failed to upload ${item}:`, err.message);
        }
      }
    }
  } catch (err) {
    console.error("❌ Error reading folder:", folderPath, err);
  }
}

// const deleteAllProductImages = async () => {
//   try {
//     const result = await cloudinary.api.delete_resources_by_prefix('royalfitz_products/');
//     console.log("Deleted images:", result);
//   } catch (error) {
//     console.error("Error deleting images:", error);
//   }
// };

// deleteAllProductImages();

// Start uploading from root folder
 uploadImagesFromFolder(rootFolder)
  .then(() => console.log("\n🎉 All images uploaded successfully!"))
  .catch((err) => console.error("❌ Upload failed:", err));
