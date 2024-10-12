import axios from "axios";
import { makeFakeAdmissionMasterData,makeFakeApplicantSUmmery } from "../../cypress/fixtures/factories/admission"
const VUE_APP_BASE_URL = process.env.VUE_APP_BASE_URL;

const createUrl = (queryParams: {
    [key: string]: string | undefined;
}): string => {
    const defaultParams = {
        handler: "",
    };
    const params = Object.entries({ ...defaultParams, ...queryParams }).reduce(
        (prev, [key, value]) => (!value ? prev : `${prev}&${key}=${value}`),
        ""
    );
    return `${VUE_APP_BASE_URL}${params}`;
};


export const useNetwork = () => {
    const getAppMasterData = async () => {
        const url = createUrl({
            "/": "get_unbilled_time_bills",
        });
        console.log(" local url ", url);
        let response;
        try {
            response = await axios.get(url);
            response = await response.data;
        } catch (error) {
            console.error(error);
        }

        return makeFakeAdmissionMasterData();
    }

    const getFakeAppMasterData = async () => {
        return makeFakeApplicantSUmmery();
    }
    return { getAppMasterData, getFakeAppMasterData }
}


