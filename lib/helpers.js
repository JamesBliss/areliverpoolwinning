// helpers
export const isLiverpool = (name) => {
  return name.toLowerCase().indexOf('liverpool') > -1;
}

export const howLong = ({ days, hours, minutes}) => {
  return `${ days === 1 ? `${ days } day ` : '' }${ days > 1 ? `${ days } days ` : '' }${ hours === 1 ? `${ hours } hour ` : '' }${ hours > 1 ? `${ hours } hours ` : '' }${ minutes === 1 ? `${ minutes } minute` : '' }${ minutes > 1 ? `${ minutes } minutes ` : '' }`;
}

export const isBrowser = !!(
  (typeof window !== 'undefined' &&
  window.document && window.document.createElement)
);