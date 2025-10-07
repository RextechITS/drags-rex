
// src/utils/alert.js
import Swal from "sweetalert2";

export const showAlert = (type, title, message) => {
    let bgColor = "#00c0ff"; // default color
    let iconColor = "#fff";
    let textColor = "#fff";

    switch (type) {
        case "success":
            bgColor = "#16a34a"; // ✅ green
            break;
        case "error":
            bgColor = "#dc2626"; // ❌ red
            break;
        case "warning":
            bgColor = "#f59e0b"; // ⚠️ yellow
            textColor = "#000"; // darker text for contrast
            break;
        case "info":
            bgColor = "#2563eb"; // ℹ️ blue
            break;
        default:
            bgColor = "#00c0ff";
    }

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        background: bgColor,
        color: textColor,
        iconColor: iconColor,
        didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
    });

    Toast.fire({
        icon: type,
        title: title,
        text: message,
    });
};
