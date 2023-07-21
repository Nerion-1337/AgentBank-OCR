import clsx from "clsx";


export default function Spinner({
  variant, 
  size, 
  icon, 
  children,
}) {
  //
  //
  let variantStyles = "";
  let sizeStyles = "";
  //
  //
  switch (variant) {
    case "t1":
      variantStyles = "spinner-1";
      break;
    case "t2":
      variantStyles = "spinner-2";
      break;
    case "t3":
      variantStyles = "spinner-3";
      break;
    case "t4":
      variantStyles = "spinner-4";
      break;
  }
  //
  //
  switch (size) {
    case "h1":
      sizeStyles = "size-spinner1";
      break;
    case "h2":
      sizeStyles = "size-spinner2";
      break;
    case "h3":
      sizeStyles = "size-spinner3";
      break;
    case "h4":
      sizeStyles = "size-spinner4";
      break;
    case "h5":
      sizeStyles = "size-spinner5";
      break;
  }
  //
  //

  return (
    <>
      <div role="spinner" className={clsx(variantStyles, sizeStyles)}>
        {icon && !children ? (
          <icon.icon />
        ) : (
          <>
            {icon && children ? (
              <>
                <icon.icon /> {children}
              </>
            ) : (
              <>{children}</>
            )}
          </>
        )}
      </div>
    </>
  );
}
