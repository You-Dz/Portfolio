import { useState } from "react";

export default function useFormSubmit(apiFn, onSuccess) {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const submit = async (data) => {
        setLoading(true);
        setError(null);
        try {
            const result = await apiFn(data);
            onSuccess(result);
        } catch (err) {
            setError(err.message || "Une erreur est survenue");
        } finally {
            setLoading(false);
        }
    };
    return { submit, error, loading };
}
