import { VIPNoteApi } from "../../APIs/API";

export const HandleDeleteAPI = (company_id, ifSuccess, ifError) => {
  console.log(`ata delete koro ${company_id}`);
  VIPNoteApi({
    method: "post",
    url: `/remove_company`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      company_id: `${company_id}`,
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
export const HandleEditAPI = (editData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/update_company`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      company_id: `${editData.company_id}`,
      name: `${editData.name}`,
      ux_sales: `${editData.ux_sales}`,
      ux_tech: `${editData.ux_tech}`,
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

export const HandleAddAPI = (addData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/new_company`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      name: `${addData.name}`,
      ux_sales: `${addData.ux_sales}`,
      ux_tech: `${addData.ux_tech}`,
      additional_info: `${addData.additional_info}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.company_id) {
        ifSuccess(res.data.company_id);
      } else {
        ifError();
      }
    })
    .catch((err) => {
      ifError();
    });
};

export const HandleAllDataReadAPI = (ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_company`,
    data: {
      username: `rakib`,
      token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
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

export const HandleDataCountAPI = (ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/count_company`,
    data: {
      username: `rakib`,
      token: `V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h`,
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
