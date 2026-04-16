import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignUp() {
    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: signupApi,
        onSuccess: () => {
            toast.success("Account created successfully! Please check your email to confirm your account.");
        }
    });
        
    return { signUp, isLoading };
}
