import mongoose from "mongoose";

const passeioSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
        longdesc: {
            type: String,
        },
        img: {
            type: String,
        },
        slug: {
            type: String,
            required: true,
            unique: true,
        },
        price: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

//export const User = mongoose.models?.User || mongoose.model("User", userSchema);
export const Passeio = mongoose.models?.Passeio || mongoose.model("Passeio", passeioSchema);