import { useState } from "react";

function useFormSubmit(apiCall, onSuccess) {
    const [error, setError] = useState("");

    const submit = async (data) => {
        setError("");
        try {
            const result = await apiCall(data);
            onSuccess?.(result);
        } catch {
            setError("Une erreur est survenue, réessaie.");
        }
    };

    return { submit, error };
}
export default useFormSubmit;