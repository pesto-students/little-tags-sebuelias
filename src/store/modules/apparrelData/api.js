import { apparrelData } from "../../../services/api"

export default data => new Promise((resolve, reject) => {
    apparrelData.post("/products", data, {})
        .then((response) => resolve(response))
        .catch((error) => reject(error));
  })