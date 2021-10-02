import { VIPNoteApi } from "../../APIs/API";

export const HandleDeleteAPI = (userAuthInfo, note_id, ifSuccess, ifError) => {
  console.log(`ata delete koro ${note_id}`);
  VIPNoteApi({
    method: "post",
    url: `/remove_note`,
    data: {
      //username: `rakib`,
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",

      note_id: `${note_id}`,
    },
  })
    .then((res) => {
      console.log(`${res}`);
      if (res.data.SUCCESSFUL) {
        ifSuccess();
      } else {
        ifError();
      }
    })
    .catch((err) => {
      console.log(err);
      ifError();
    });
};
export const HandleEditAPI = (userAuthInfo, editData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/update_note`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      note_id: `${editData.note_id}`,
      title: `${editData.title}`,
      event_id: `${editData.event_id}`,
      company_id: `${editData.company_id}`,
      product_id: `${editData.product_id}`,
      content: `${editData.content}`,
      additional_info: `${editData.additional_info}`,
    },
  })
    .then((res) => {
      if (res.data.SUCCESSFUL) {
        console.log(res.data.SUCCESSFUL);
        ifSuccess();
      } else {
        ifError();
      }
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleAddAPI = (userAuthInfo, addData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/new_note`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      title: `${addData.title}`,
      event_id: `${addData.event_id}`,
      company_id: `${addData.company_id}`,
      product_id: `${addData.product_id}`,
      content: `${addData.content}`,
      additional_info: `${addData.additional_info}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.note_id) {
        ifSuccess(res.data.note_id);
      } else {
        ifError();
      }
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleGetProductIdListAPI = (userAuthInfo, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_product_list`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
      // title: `${title}`,
      //body: `${body}`,
    },
  })
    .then((res) => {
      console.log(res.data.product);
      return res.data.product;
    })
    .then((data) => {
      console.log(data);
      ifSuccess(data);
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleGetEventIdListAPI = (userAuthInfo, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_event_list`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
      // title: `${title}`,
      //body: `${body}`,
    },
  })
    .then((res) => {
      console.log(res.data.event);
      return res.data.event;
    })
    .then((data) => {
      console.log(data);
      ifSuccess(data);
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleGetCompanyIdListAPI = (userAuthInfo, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_company_list`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
      // title: `${title}`,
      //body: `${body}`,
    },
  })
    .then((res) => {
      console.log(res.data.company);
      return res.data.company;
    })
    .then((data) => {
      console.log(data);
      ifSuccess(data);
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleAllDataReadAPI = (userAuthInfo, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_note_data`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
      // title: `${title}`,
      //body: `${body}`,
    },
  })
    .then((res) => {
      // console.log(res.data.results);
      return res.data.results;
    })
    .then((data) => {
      ifSuccess(data);
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleDataCountAPI = (userAuthInfo, ifSuccess, ifError) => {
  console.log(userAuthInfo.userName);
  console.log("okeeeee");
  console.log(userAuthInfo.token);
  VIPNoteApi({
    method: "post",
    url: `/count_note`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
    },
  })
    .then((res) => {
      console.log(`ata count data -> ${res.data.count}`);
      return res.data.count;
    })
    .then((countValue) => {
      ifSuccess(countValue);
    })
    .catch((err) => {
      console.log(`${err}`);
      ifError();
    });
};
