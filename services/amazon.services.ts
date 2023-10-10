const { I } = inject();
class AmazonService {

    async getDepartments(){
       const response = await I.sendGetRequest("/menu/departments");
       return response.data;
    }
  
}
export = new AmazonService();