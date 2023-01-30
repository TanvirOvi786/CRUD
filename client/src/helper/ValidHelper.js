import cogoToast from 'cogo-toast';
class ValidHelper {
    isEmpty(value) {
        if (value.length === 0) {
            return true;
        } else {
            return false;
        }
    }
    SuccessCogo(msg) {
        cogoToast.success(msg);
    }
    ErrorCogo(msg) {
        cogoToast.error(msg);
    }
}
export const { isEmpty, SuccessCogo, ErrorCogo } = new ValidHelper();