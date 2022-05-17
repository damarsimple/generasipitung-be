import { createWriteStream, unlink } from "fs";
import { FileUpload } from "graphql-upload";
import { getConfig } from "./config";
import UUID from "uuidjs";

export function storeFile(e: FileUpload) {
    const { createReadStream, filename: f } = e;

    const filename = `${UUID.generate()}-${f}`

    const stream = createReadStream();

    const filePath = `${getConfig("FILES_PATH")}/${filename}`;
    const saveUrl = `${getConfig("APP_PATH")}/upload/${filename}`;

    return new Promise<string>((resolve, reject) => {
        stream.pipe(createWriteStream(filePath))
            .on("finish", () => resolve(saveUrl))
            .on("error", reject);
    });

}

export function deleteFile(urlPath: string) {

    const filePath = `${getConfig("FILES_PATH")}/${urlPath.split("/").pop()}`;


    return new Promise((res, rej) => {
        unlink(filePath, (err) => {
            if (err) {
                rej(err);
            }
            res(true);
        });
    })
}