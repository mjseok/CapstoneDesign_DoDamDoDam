const router = require("express").Router();

const Multer = require("multer");
const { Storage } = require("@google-cloud/storage");
const { format } = require("util");

require("dotenv").config();
// 스토리지 초기화
const storage = new Storage();
// 버킷 초기화
// console.log(require("dotenv").config());
// console.log(process.env.GCLOUD_STORAGE_BUCKET);
const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET);
// 라우터 초기화

// multer 초기화
const multer = Multer({
  storage: Multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // no larger than 2mb, you can change as needed.
  },
});

exports.UploadImg = router.post(
  "/upload",
  // 파일을 하나만 가져오고, 키 값은 profileImage로
  multer.single("file"),
  (req, res) => {
    console.log(req.body.name);
    if (!req.file) {
      res.status(400).json({
        message: "업로드할 이미지가 없습니다",
      });
      return;
    }

    // 이미지 업로드 준비
    // 로그인 한 사용자의 이름을 따도록 함
    // 이미지 업로드 스트림 생성
    const blob = bucket.file(req.body.name);
    const blobStream = blob.createWriteStream();

    // 에러 핸들링
    blobStream.on("error", (err) => {
      console.log(err);
      res.status(500).json({
        message: "업로드 중 오류가 발생했습니다",
        error: JSON.parse(JSON.stringify(err)),
      });
    });

    // 종료 처리
    blobStream.on("finish", () => {
      const publicUrl = format(
        `https://storage.googleapis.com/${bucket.name}/${blob.name}`
      );
      // 최종적으로 업로드 프로세스가 완료되는 시점
      res.status(200).json({
        message: "업로드 성공",
        url: publicUrl,
      });
    });

    // 업로드 스트림 실행
    blobStream.end(req.file.buffer);
  }
);
// exports.downloadImg = router.get(
//     "/",
//     // 파일을 하나만 가져오고, 키 값은 profileImage로
//     (req, res) => {

//   );
