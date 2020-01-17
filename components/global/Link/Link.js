import { withRouter } from 'next/router';
import cx from 'classnames';
import Link from 'next/link';
import React, { Children } from 'react';

const ActiveLink = ({
  router,
  children,
  href,
  additionalPaths = [],
  activeClassName,
  ...otherProps
}) => {
  const child = Children.only(children);

  const className = cx(child.props.className, {
    [activeClassName]: (router.pathname === href.pathname || additionalPaths.indexOf(router.pathname) > -1) && activeClassName
  });

  if (router.pathname === href.pathname || additionalPaths.indexOf(router.pathname) > -1) {
    return React.cloneElement(child, { className });
  }

  return (
    <Link href={href} {...otherProps}>
      { React.cloneElement(child, { className }) }
    </Link>
  );
};

export default withRouter(ActiveLink);
