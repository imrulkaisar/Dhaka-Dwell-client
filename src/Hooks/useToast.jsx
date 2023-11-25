import Swal from "sweetalert2";

const useToast = () => {
  const showToast = (icon, title) => {
    Swal.fire({
      icon: icon,
      text: title,
      toast: true,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  return { showToast };
};

export default useToast;
