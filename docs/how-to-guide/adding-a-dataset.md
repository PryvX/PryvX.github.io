# Adding a Dataset

Once your file has been [locally hashed](/how-to-guide/hashing-pii-before-upload), add it to the room's **Data** tab either by uploading it directly or by connecting it from cloud storage.

## Option A: Upload a file

1. From the room's **Data** tab, select **Add Dataset → Upload**.
2. **Upload**: choose your sanitized CSV file.
3. **Preview**: check the detected columns and sample rows.
4. **Details**: give the dataset a name and an optional description, then confirm.

Column names and types are detected automatically from the file. The upload is tied to the room's expiry date — you can't add a dataset after the room has ended.

## Option B: Connect from cloud storage

1. From the room's **Data** tab, select **Add Dataset → Connect**.
2. Choose a **Storage Type**: Google Cloud Storage, AWS S3, or Azure Blob Storage.
3. Enter a **Dataset Name** and optional description.
4. Enter the file's location and format:
   - **GCS**: bucket name, file path, file type, region, and a service account (client email, private key ID, private key).
   - **AWS S3**: bucket name, file path, file type, region, and an access key ID / secret access key.
   - **Azure Blob**: container name, account name, account key, file path, file type.
5. Select **Connect**. PryvX reads the file's schema and column types without copying the file into a location other participants can browse.

## After adding a dataset

The dataset appears in the **Data** tab for every room participant, showing its name, columns, and connection type (upload vs. the specific cloud provider). It becomes selectable as Table 1 or Table 2 when [building a task](/how-to-guide/building-and-running-a-task). Datasets can be removed from the **Data** tab by the participant who added them.
