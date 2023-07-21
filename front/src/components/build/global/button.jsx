import clsx from "clsx";
import Spinner from "#components/build/global/spinner";
import { ImSpinner9 } from "react-icons/im";
import Navlinks from "#components/build/global/navlink";
//
//
export default function Button({  
  variant,
  size,
  fontSize,
  icon,
  disabled,
  loading,
  item_i,
  className,
  children,
  fonction = () => {
    console.log();
  },
  data_function,
  href,
  active,
  type,
  special,
  useRef,
}) {
  //
  //
  let variantStyles = "";
  let sizeStyles = "";
  let fontSizeStyles = "";
  //
  //
  switch (variant) {
    case "t0":
      variantStyles = "type-btn0";
      break;
    case "t1":
      variantStyles = "type-btn1";
      break;
    case "t2":
      variantStyles = "type-btn2";
      break;
    case "t3":
      variantStyles = "type-btn3";
      break;
    case "t4":
      variantStyles = "type-btn4";
      break;
  }
  //
  //
  switch (size) {
    case "s0":
      sizeStyles = "size-btn1";
      break;
    case "s1":
      sizeStyles = "size-btn1";
      break;
    case "s2":
      sizeStyles = "size-btn2";
      break;
    case "s3":
      sizeStyles = "size-btn3";
      break;
    case "s4":
      sizeStyles = "size-btn4";
      break;
    case "s5":
      sizeStyles = "size-btn5";
      break;
  }
  //
  //
  switch (fontSize) {
    case "s0":
      fontSizeStyles = "size-t1";
      break;
    case "s1":
      fontSizeStyles = "size-t1";
      break;
    case "s2":
      fontSizeStyles = "size-t2";
      break;
    case "s3":
      fontSizeStyles = "size-t3";
      break;
    case "s4":
      fontSizeStyles = "size-t4";
      break;
    case "s5":
      fontSizeStyles = "size-t5";
      break;
    case "s6":
      fontSizeStyles = "size-t6";
      break;
    case "s7":
      fontSizeStyles = "size-t7";
      break;
    case "s8":
      fontSizeStyles = "size-t8";
      break;
  }
  //
  //
  const handleClick = () => {
    if (fonction) fonction(data_function);
  };
  //
  //
  const buttonContent = (
    <>
      {loading ? (
        <Spinner variant="t1" size="h1" icon={{ icon: ImSpinner9 }} />
      ) : (
        <>
          {icon && !children ? (
            <icon.icon />
          ) : (
            <>
              {icon && children ? (
                <>
                  <icon.icon /> {children}
                </>
              ) : (
                <>
                  {item_i && children ? (
                    <>
                      <i /> <span>{children}</span>
                    </>
                  ) : (
                    <>{children}</>
                  )}
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
  //
  const buttonElement = (
    <button
      type="button"
      className={clsx(variantStyles, sizeStyles, fontSizeStyles, className)}
      onClick={handleClick}
      disabled={disabled}
      ref={useRef}
    >
      {buttonContent}
    </button>
  );
  //
  //
  if (href) {
    return (
      <Navlinks href={href} type={type} active={active} special={special}>
        {buttonElement}
      </Navlinks>
    );
  }
  //
  return buttonElement;
}
