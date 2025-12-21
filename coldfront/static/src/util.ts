// SPDX-FileCopyrightText: (C) ColdFront Authors
//
// SPDX-License-Identifier: AGPL-3.0-or-later

export function getCookie(name: string) {
  let cookieValue = '';
  if (document.cookie && document.cookie != '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) == name + '=') {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
