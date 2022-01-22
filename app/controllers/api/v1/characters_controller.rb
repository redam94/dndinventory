class Api::V1::CharactersController < ApplicationController
    
    def index
        if logged_in?
        @characters = Character.all.select {|character| character.user_id == current_user.id}
           if @characters
              render json: {
              characters: @characters
           }
          else
              render json: {
              status: 500,
              errors: ['no characters found']
          }
         end
        else
            render json: { 
                status: 500,
                errors: ["no user login"]
             }
        end
    end

def show
      if logged_in?
       @character = Character.find_by(user_id: current_user.id, name: params[:id])
           if @character && @character.user_id == current_user.id
              render json: {
              character: @character
           }
           else
              render json: {
              status: 500,
              errors: ['character not found']
            }
           end
        else
          render json: { status:500, errors:["Not logged in"] }
        end
      end
      
      def create
        if logged_in?
         @character = Character.new(:name=>character_params[:name], :user_id => current_user.id)
             if @character.save
                 render json: {
                 status: :created,
                 character: @character
             }
            else render json: { 
                status: 500,
                errors: @character.errors.full_messages
             }
            end
        
        else 
                render json: {
                status: 500,
                errors: ["not logged in"]
            }
        end

      end

private
    
     def character_params
         params.require(:character).permit(:name)
     end
end