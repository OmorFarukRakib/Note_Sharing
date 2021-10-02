import { VIPNoteApi } from "../../APIs/API";

export const HandleDeleteAPI = (userAuthInfo, user_id, ifSuccess, ifError) => {
  console.log(`ata delete koro ${user_id}`);
  VIPNoteApi({
    method: "post",
    url: `/remove_user`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      user_id: `${user_id}`,
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
    url: `/update_user`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      user_id: `${editData.user_id}`,
      //newusername: `${editData.username}`,
      user_level: `${editData.user_level}`,
      fullname: `${editData.fullname}`,
      email: `${editData.email}`,
      department: `${editData.department}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.SUCCESSFUL) {
        console.log(res.data.SUCCESSFUL);
        ifSuccess();
      } else {
        console.log(res);
        ifError();
      }
    })
    .catch((err) => {
      console.log(err);
      ifError();
    });
};

export const HandleAddAPI = (userAuthInfo, addData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/new_user`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      newusername: `${addData.name}`,
      user_level: `${addData.user_level}`,
      fullname: `${addData.fullname}`,
      email: `${addData.email}`,
      department: `${addData.department}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.user_id) {
        ifSuccess(res.data.user_id);
      } else {
        ifError();
      }
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleAllDataReadAPI = (userAuthInfo, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_user`,
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
      console.log(res.data.results);
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
  VIPNoteApi({
    method: "post",
    url: `/count_user`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
    },
  })
    .then((res) => {
      console.log(res.data.count);
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

export const HandleResetPasswordAPI = (
  userAuthInfo,
  user_id,
  ifSuccess,
  ifError
) => {
  VIPNoteApi({
    method: "post",
    url: `/reset_password`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
      user_id: `${user_id}`,
    },
  })
    .then((res) => {
      //console.log(`olalala`);
      console.log(res);
      if (res.SUCCESSFUL) {
        ifSuccess();
      }
    })
    .catch((err) => {
      console.log(`${err}`);
      ifError();
    });
};
