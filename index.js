const got = require('got')

class Redfin{
	static base = 'https://redfin.com/stingray/';
	static user_agent_header = {
			headers: {
	            'user-agent': 'redfin'
			}
        }

	contstructor(){
		
	}

	static async meta_property(url, args, page=false){
        if(page){
            Object.assign({}, args, {"pageType": 3});
        }
		let params = Object.assign({}, args, {"accessLevel": 3});
		
		return await this.meta_request(url, params);
	}


	static async meta_request(url, params){
            return await got.get(this.base+url, {
                searchParams: params,
                headers: {
                    'user-agent': 'redfin'
                }
            });
	}


    // Url Requests

    static async initial_info(url, params){
        return await this.meta_request('api/home/details/initialInfo', Object.assign({}, {'path': url}, params));
    }

    static async page_tags(url, params){
        return await this.meta_request('api/home/details/v1/pagetagsinfo', Object.assign({}, {'path': url}, params))
    }

    static async primary_region(url, params){
        return await this.meta_request('api/home/details/primaryRegionInfo', Object.assign({}, {'path': url}, params))
    }

    // Search
    static async search(query, params){
        return await this.meta_request('do/location-autocomplete', Object.assign({}, {'location': query, 'v': 2}, params));
    }

    // Property ID Requests
    static async above_the_fold_prop(property_id, params){
        return await this.meta_property('aboveTheFold', Object.assign({}, {'propertyId': property_id}, params), page=false)
    }

    static async below_the_fold(property_id, params){
        return await this.meta_property('belowTheFold', Object.assign({}, {'propertyId': property_id}, params), page=true)
    }

    static async hood_photos(property_id, params){
        return await this.meta_request('api/home/details/hood-photos', {'propertyId': property_id, params})
    }

    static async more_resources(property_id, params){
        return await this.meta_request('api/home/details/moreResourcesInfo', {'propertyId': property_id, params})
    }

    static async page_header(property_id, params){
        return await this.meta_request('api/home/details/homeDetailsPageHeaderInfo', {'propertyId': property_id, params})
    }

    static async property_comments(property_id, params){
        return await this.meta_request('api/v1/home/details/propertyCommentsInfo', {'propertyId': property_id, params})
    }

    static async building_details_page(property_id, params){
        return await this.meta_request('api/building/details-page/v1', {'propertyId': property_id, params})
    }

    static async owner_estimate(property_id, params){
        return await this.meta_request('api/home/details/owner-estimate', {'propertyId': property_id, params})
    }

    static async claimed_home_seller_data(property_id, params){
        return await this.meta_request('api/home/details/claimedHomeSellerData', {'propertyId': property_id, params})
    }

    static async cost_of_home_ownership(property_id, params){
        return await this.meta_request('do/api/costOfHomeOwnershipDetails', {'propertyId': property_id, params})
    }

    // Listing ID Requests
    static async floor_plans(listing_id, params){
        return await this.meta_request('api/home/details/listing/floorplans', {'listingId': listing_id, params})
    }

    static async tour_list_date_picker(listing_id, params){
        return await this.meta_request('do/tourlist/getDatePickerData', {'listingId': listing_id, params})
    }

    // Table ID Requests

    static async shared_region(table_id, params){
        return await this.meta_request('api/region/shared-region-info', {'tableId': table_id, 'regionTypeId': 2, 'mapPageTypeId': 1, params})
    }

    //Property Requests

    static async similar_listings(property_id, listing_id, params){
        return await this.meta_property('similars/listings', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async similar_sold(property_id, listing_id, params){
        return await this.meta_property('similars/solds', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async nearby_homes(property_id, listing_id, params){
        return await this.meta_property('nearbyhomes', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async above_the_fold(property_id, listing_id, params){
        return await this.meta_property('aboveTheFold', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async property_parcel(property_id, listing_id, params){
        return await this.meta_property('propertyParcelInfo', {'propertyId': property_id, 'listingId': listing_id, params}, page=true)
    }

    static async activity(property_id, listing_id, params){
        return await this.meta_property('activityInfo', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async customer_conversion_info_off_market(property_id, listing_id, params){
        return await this.meta_property('customerConversionInfo/offMarket', {'propertyId': property_id, 'listingId': listing_id, params}, page=true)
    }

    static async rental_estimate(property_id, listing_id, params){
        return await this.meta_property('rental-estimate', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async avm_historical(property_id, listing_id, params){
        return await this.meta_property('avmHistoricalData', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async info_panel(property_id, listing_id, params){
        return await this.meta_property('mainHouseInfoPanelInfo', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async descriptive_paragraph(property_id, listing_id, params){
        return await this.meta_property('descriptiveParagraph', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async avm_details(property_id, listing_id, params){
        return await this.meta_property('avm', {'propertyId': property_id, 'listingId': listing_id, params})
    }

    static async tour_insights(property_id, listing_id, params){
        return await this.meta_property('tourInsights', {'propertyId': property_id, 'listingId': listing_id, params}, page=true)
    }

    static async stats(property_id, listing_id, region_id, params){
        return await this.meta_property('stats', {'regionId': region_id, 'propertyId': property_id, 'listingId': listing_id, 'regionTypeId': 2, params})
    }

}

module.exports.Redfin = Redfin;