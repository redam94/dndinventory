class Api::V1::ItemsController < ApplicationController
    
    def index
        character_id = Character.find_by(name: params[:id], user_id: current_user.id)[:id]
        @items = Item.all.select {|item| item.character_id == character_id}
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
         name, description, weight, qty = item_params.values_at(:name, :description, :weight, :qty)
         character_id = Character.find_by(name: params[:id], user_id: current_user.id).id
         @item = Item.new({name: name, description: description, weight: weight, qty: qty, character_id: character_id})
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
      
     def item_params
         params.require(:item).permit(:name, :description, :weight, :qty)
     end
end