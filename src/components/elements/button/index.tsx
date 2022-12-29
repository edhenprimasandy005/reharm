/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-nested-ternary */
import classnames from 'classnames';
import Link from 'next/link';

const Button = (props: any) => {
  const { href, onClick, className, children, isExternal, isDisabled } = props;

  const disabledClass = isDisabled ? 'is-disabled' : '';
  const classProps = classnames(`dh-btn ${disabledClass}`, className);

  const component = isDisabled ? (
    <Link legacyBehavior className={classProps} href="#">
      {children}
    </Link>
  ) : href && !isExternal ? (
    <Link href={href}>
      <div className={classProps}>{children}</div>
    </Link>
  ) : href && isExternal ? (
    <Link
      legacyBehavior
      className={classProps}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </Link>
  ) : (
    <button onClick={onClick} className={classProps}>
      {children}
    </button>
  );

  return component;
};

export default Button;
