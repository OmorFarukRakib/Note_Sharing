import { VIPNoteApi } from "../../APIs/API";

export const HandleDeleteAPI = (event_id, ifSuccess, ifError) => {
  console.log(`ata delete koro ${event_id}`);
  VIPNoteApi({
    method: "post",
    url: `/remove_event`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      event_id: `${event_id}`,
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
    url: `/update_event`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      event_id: `${editData.event_id}`,
      name: `${editData.name}`,
      info: `${editData.info}`,
      company_list: `${editData.company_list}`,
      additional_info: `${editData.additional_info}`,
      startedAt: `${editData.startedAt}`,
      endedAt: `${editData.endedAt}`,
      expired: `${editData.expired}`,
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
    url: `/new_event`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
      name: `${addData.name}`,
      info: `${addData.info}`,
      company_list: `${addData.company_list}`,
      additional_info: `${addData.additional_info}`,
      startedAt: `${addData.startedAt}`,
      endedAt: `${addData.endedAt}`,
      expired: `${addData.expired}`,
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.event_id) {
        ifSuccess(res.data.event_id);
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
    url: `/get_event`,
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
    url: `/count_event`,
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
