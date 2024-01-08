import mongoose from 'mongoose';

const videoSchema = mongoose.Schema({
  link: {
    public_id: String,
    secure_url: String,
  },
  timestamps: [
    {
      text: String,
      time: Number,
    },
  ],
}, {
  timestamps: true,
});

const Video = mongoose.models.Video|| mongoose.model('Video', videoSchema);

export default Video;
