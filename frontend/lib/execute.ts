import io from "@/lib/io";


const backendService = async (ipynb : string , bookId : string ) => {
  console.log("Service working")
    const formData = new FormData();
    const notebookJson = new Blob([ipynb], {
      type: "application/json",
    });
    formData.append("file", notebookJson, "notebook.json");

    try {
      const response = await io.post(`/api/execute/${bookId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data;
    } catch (error) {
      return error;
    }
}



export {
    backendService
}