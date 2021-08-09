import { VIPNoteApi } from "../../APIs/API";

export const HandleDeleteAPI = (note_id, ifSuccess, ifError) => {
  console.log(`ata delete koro ${note_id}`);
  VIPNoteApi({
    method: "post",
    url: `/remove_note`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
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
export const HandleEditAPI = (editData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/update_note`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
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

export const HandleAddAPI = (addData, ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/new_note`,
    data: {
      username: `rakib`,
      token:
        "V2e78jybobgQ3HRKS1KyODcekDnT2dnj3dGCkr95iaG6j7j7sKkVloCvTWKn0bLc6eyHSuS0GGjYAdtTohYGOnxmnKZz9UexDztyFHPNIflbQsIQJdtXjqSJoXuGwK9h",
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

export const HandleAllDataReadAPI = (ifSuccess, ifError) => {
  VIPNoteApi({
    method: "post",
    url: `/get_note`,
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
    url: `/count_note`,
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
