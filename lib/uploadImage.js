import { TelegraPh, UploadFileUgu } from "./uploader.js";

/**
 * Upload image to telegra.ph
 * Supported mimetype:
 * - `image/jpeg`
 * - `image/jpg`
 * - `image/png`s
 * @param {Buffer} buffer Image Buffer
 * @return {Promise<string>}
 */
export default async function (inp) {
  let err = false;
  for (let upload of [TelegraPh, UploadFileUgu]) {
    try {
      return await upload(inp);
    } catch (e) {
      err = e;
    }
  }
  if (err) throw err;
}
