import { Request, Response } from 'express';
import AssetService from '../service/assets.services';
import multer from 'multer';
import path from 'path';

const storage = multer.memoryStorage();

const fileFilter = (req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  const filetypes = /xlsx/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetypes = [
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];
  const mimetype = mimetypes.includes(file.mimetype);

  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb(new Error('Only Excel files with .xlsx extension are allowed'));
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
});


export { upload };