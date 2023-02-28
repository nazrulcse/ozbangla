
const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? page * limit : 0;
    return { limit, offset };
};

const getPagingData = (data, page, limit, totalItem) => {
    const count = totalItem;
    const rows = data
    const currentPage = page ? +page : 0;
    const totalPages = Math.ceil(totalItem / limit);
    let paginated_data = {}
    paginated_data.totalItem = totalItem
    paginated_data.data = data
    paginated_data.totalPages = totalPages
    paginated_data.currentPage = currentPage
    return { paginated_data };
  };


module.exports = {
    getPagination,
    getPagingData
};
  