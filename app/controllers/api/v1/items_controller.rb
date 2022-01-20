class Api::V1::ItemsController < ApplicationController
    
    def index
        @items = Item.all
           if @items
              render json: {
              items: @items
           }
          else
              render json: {
              status: 500,
              errors: ['no items found']
          }
         end
    end
def show
       @item = Item.find(params[:id])
           if @item && logged_in?
              render json: {
              item: @item
           }
           else
              render json: {
              status: 500,
              errors: ['item not found']
            }
           end
      end
      
      def create
         @item = Item.new(item_params)
             if @item.save && logged_in?
                 render json: {
                 status: :created,
                 item: @item
             }
            else 
                render json: {
                status: 500,
                errors: @item.errors.full_messages
            }
            end
      end
private
      
     def user_params
         params.require(:item).permit(:name, :description, :weight, :qty, :character_id, :container_id)
     end
end