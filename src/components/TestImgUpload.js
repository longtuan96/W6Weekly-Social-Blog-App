import React, { useState } from "react";
import { useDispatch } from "react-redux";

const TestImgUpload = ({ place }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const uploadImage = async (e) => {
    let url = process.env.REACT_APP_IMG_API + "/image/upload";

    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "sirisimages");
    setLoading(true);
    const res = await fetch(url, {
      method: "POST",
      body: data,
    });

    const file = await res.json();
    console.log("res img:", file.secure_url);
    setLoading(false);
    if (place === "register") {
      dispatch({ type: "UPLOAD_AVATAR", payload: file.secure_url });
    } else {
      dispatch({ type: "UPLOAD_IMG", payload: file.secure_url });
    }
  };
  return (
    <div>
      <label for="file-upload">
        <span class="material-icons nav-link">image</span>
      </label>
      <input
        id="file-upload"
        type="file"
        name="file"
        onChange={uploadImage}
        style={{ zIndex: -1, opacity: 0, position: "absolute" }}
      />

      {loading ? "" : <p>Upload done</p>}
    </div>
  );
};

export default TestImgUpload;
