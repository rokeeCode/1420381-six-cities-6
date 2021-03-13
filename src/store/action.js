export const ActionType = {
  CHANGE_CITY: `app/changeCity`,
  REDIRECT_TO_ROUTE: `app/redirectToRoute`,
  SET_OFFERS: `data/setOffers`,
  SET_COMMENTS: `data/setComments`,
  SET_AUTHORIZATION_STATUS: `user/requiredAuthorization`,
  SET_USER_INFO: `user/setUserInfo`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city
  }),
  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers
  }),
  setAuthorizationStatus: (status) => ({
    type: ActionType.SET_AUTHORIZATION_STATUS,
    payload: status,
  }),
  setUserInfo: (info) => ({
    type: ActionType.SET_USER_INFO,
    payload: info
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url
  }),
  setComments: (comments) => ({
    type: ActionType.SET_COMMENTS,
    payload: comments
  })
};
