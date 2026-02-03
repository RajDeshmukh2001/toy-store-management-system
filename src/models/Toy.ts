import mongoose, { models } from "mongoose";

const toySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    { timestamps: true }
);

const Toy = mongoose.models.Toy || mongoose.model("toys", toySchema);
export default Toy;