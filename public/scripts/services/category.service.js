angular.module('routeApp')
  .service('CategoryService', CategoryService);

function CategoryService($http) {

  var cat = this;

  //  Get all categories
  cat.getCategories = function() {
    return $http.get('/category').then(function(response) {
      //  Returns array of objects {_id, name}
      return response.data;
    });
  }

  //  Post a category, takes object {name}
  cat.postCategory = function(categoryData) {
    return $http({
      method: 'POST',
      url: '/category',
      data: categoryData
    }).then(function(response) {
      console.log('POST successful:', response.data);
      return response.data;
    });
  }

  //  Update a category, takes object {_id, name}
  cat.updateCategory = function(categoryData) {
    return $http({
      method: 'PUT',
      url: '/category/' + categoryData._id,
      data: categoryData
    }).then(function(response) {
      console.log('PUT successful:', response.data);
      return response.data;
    });
  }

  //  Delete a category, takes object {_id, name}
  cat.deleteCategory = function(categoryData) {
    return $http({
      method: 'DELETE',
      url: '/category/' + categoryData._id,
      data: categoryData
    }).then(function(response) {
      console.log('DELETE successful');
    });
  }

}
