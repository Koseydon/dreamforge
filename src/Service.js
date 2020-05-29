import axios from "axios";

function BlogService() {
  this.url = "https://dreamforge.space/backend/blog-item-get/";

  this.get = async () => {
    let response = await axios.get(`${this.url}`);

    let result = response.data;

    return result;
  };
}

export default new BlogService();
