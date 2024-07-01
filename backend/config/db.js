import mongoose from 'mongoose';

export const connectDB = async () => {
  await mongoose
    .connect(
      'mongodb+srv://sadikahmetaydin:sadikahmetaydin@cluster0.bzztjxm.mongodb.net/food-del'
    )
    .then(() => console.log('DB Connected'));
};
