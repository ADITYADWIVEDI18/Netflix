import OPENAI from "openai";
import { OPENAPI_KEY } from "../constant";

const openai = new OPENAI({
    apiKey: OPENAPI_KEY,
    dangerouslyAllowBrowser: true
});

export default openai;