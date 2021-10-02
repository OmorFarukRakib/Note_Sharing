import { VIPNoteApi } from "../../APIs/API";

export const HandleDeleteAPI = (userAuthInfo, product_id, ifSuccess, ifError) => {
  console.log(`ata delete koro ${product_id}`);
  VIPNoteApi({
    method: "post",
    url: `/remove_product`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      product_id: `${product_id}`,
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
    url: `/update_product`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      product_id: `${editData.product_id}`,
      name: `${editData.name}`,
      ux_sales: `${editData.ux_sales}`,
      ux_tech: `${editData.ux_tech}`,
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
    url: `/new_product`,
    data: {
      username: `${userAuthInfo.userName}`,
      token: `${userAuthInfo.token}`,
      // username: `rakib`,
      // token:
      //   "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      name: `${addData.name}`,
      ux_sales: `${addData.ux_sales}`,
      ux_tech: `${addData.ux_tech}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.product_id) {
        ifSuccess(res.data.product_id);
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
    url: `/get_product`,
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
    url: `/count_product`,
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
