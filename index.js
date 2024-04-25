export function getURLParameter(url, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(url);
  return results === null
    ? null
    : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
