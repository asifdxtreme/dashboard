// Copyright 2017 The Kubernetes Dashboard Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Controller for the Third Party Resource list view.
 *
 * @final
 */
export class ThirdPartyResourceListController {
  /**
   * @ngInject
   */
  constructor(thirdPartyResourceList, kdThirdPartyResourceListResource) {
    /** @export {!backendApi.ThirdPartyResourceList} */
    this.thirdPartyResourceList = thirdPartyResourceList;

    /** @export {!angular.Resource} */
    this.thirdPartyResourceListResource = kdThirdPartyResourceListResource;
  }

  /**
   * @return {boolean}
   * @export
   */
  shouldShowZeroState() {
    /** @type {number} */
    let resourcesLength = this.thirdPartyResourceList.listMeta.totalItems;
    return resourcesLength === 0;
  }
}
