import api from "../../apiService";

const fetchData = () => async (dispatch) => {
  try {
    console.log("we are in middleWare");
    let url = `/books?`;
    const res = await api.get(url);
    console.log(res.data);

    console.log("dat fetch done");
    dispatch({ type: "JOB_REQUEST_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "JOB_REQUEST_FAIL", payload: error.message });
  }
};

const getSingleBlog = (id) => async (dispatch) => {
  let url = `/jobs/:id`;
  const res = await api.get(url);
  console.log(res.data);

  dispatch({ type: "JOB_SINGLEJOB_SUCCESS", payload: res.data });
};

export const blogActions = { fetchData, getSingleBlog };
