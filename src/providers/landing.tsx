import { createContext, useContext, useState, type ReactNode } from "react";

type LandingState = {
    drawerOpen: boolean;
    isSubmitting: boolean;
    submitSuccess: boolean;
};

type LandingActions = {
    openDrawer: () => void;
    closeDrawer: () => void;
    setDrawerOpen: (open: boolean) => void;
    setSubmitting: (submitting: boolean) => void;
    setSuccess: (success: boolean) => void;
    resetForm: () => void;
};

type LandingContextValue = LandingState & LandingActions;

const LandingContext = createContext<LandingContextValue | null>(null);

export function LandingProvider({ children }: { children: ReactNode }) {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);
    const setSubmitting = (submitting: boolean) => setIsSubmitting(submitting);
    const setSuccess = (success: boolean) => setSubmitSuccess(success);

    const resetForm = () => {
        setSubmitSuccess(false);
    };

    const handleDrawerChange = (open: boolean) => {
        setDrawerOpen(open);
        if (!open) {
            resetForm();
        }
    };

    return (
        <LandingContext.Provider
            value={{
                drawerOpen,
                isSubmitting,
                submitSuccess,
                openDrawer,
                closeDrawer,
                setDrawerOpen: handleDrawerChange,
                setSubmitting,
                setSuccess,
                resetForm,
            }}
        >
            {children}
        </LandingContext.Provider>
    );
}

export function useLanding() {
    const context = useContext(LandingContext);
    if (!context) {
        throw new Error("useLanding must be used within a LandingProvider");
    }
    return context;
}