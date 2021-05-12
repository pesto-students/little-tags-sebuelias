import { api } from '../../../services/api'

export default data => new Promise((resolve, reject) => {
        if (data.type === 'google') {
            api.post("", data, {})
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        } if (data.type === 'facebook') {
          api.post("", data, {})
          .then((response) => resolve(response))
          .catch((error) => reject(error));
      } else {
            api.post("", data, {})
            .then((response) => resolve(response))
            .catch((error) => reject(error));
        }
      })