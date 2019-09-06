<?php
/*
Plugin Name: lancerDes
Author: Mariana
Description: Un exercice.
Version: 0.0.1
*/

class LancerDes extends WP_Widget {

	function __construct() {
		parent::__construct(
// widget ID
			'hstngr_widget',
// widget name
			__('Lancez vos dés!', ' hstngr_widget_domain'),
// widget description
			array( 'description' => __( 'Lancer de dés', 'hstngr_widget_domain' ), )
		);
	}


	public function widget( $args, $instance ) {
		$title = apply_filters( 'widget_title', $instance['title'] );
		echo $args['before_widget'];
//if title is present
		if ( ! empty( $title ) )
			echo $args['before_title'] . $title . $args['after_title'];
//output
	// echo __( 'Hello, World from Hostinger.com', 'hstngr_widget_domain' );
 // echo $args['after_widget'];


		?>

		<div id="contain">

			<!------DES ET BOUTON LANCER-------->
			<div id="divDesEtBoutonLancer">

				<!------DES ET INPUT NB DES-------->
				<div class="divContainDes">
					<input type="button" value="Dé 2" id="deux" class="boutonDes">
					<input type="number" id="deuxNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 4" id="quatre" class="boutonDes">
					<input type="number" id="quatreNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 6" id="six" class="boutonDes">
					<input type="number" id="sixNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 8" id="huit" class="boutonDes">
					<input type="number" id="huitNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 10" id="dix" class="boutonDes">
					<input type="number" id="dixNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 12" id="douze" class="boutonDes">
					<input type="number" id="douzeNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 20" id="vingt" class="boutonDes">
					<input type="number" id="vingtNbLances" min="0" max="100" class="nbLancesDes">
				</div>
				<div class="divContainDes">
					<input type="button" value="Dé 100" id="cent" class="boutonDes">
					<input type="number" id="centNbLances" min="0" max="100" class="nbLancesDes">
				</div>

				<!------BOUTON LANCER-------->
				<div id="divBoutonLancer">
					<input type="button" value="Lancer" id="boutonLancer">
				</div>
			</div>
			<!------RESULTAT-------->
            <div id="divResultat">
            	<h1 id="h1resultat"></h1>
            </div>
        </div>

			<style>
				.divContainDes{
					/*background-color: pink;*/
					margin:20px 10px;
					width: 350px;
					display: flex;
					justify-content: space-around;
				}

				.boutonDes{
					font-size: 1em;
					margin-right:10px;
					padding:10px 20px;
					background-color: #44cd8d;
					border: none;
					color: white;
				}

				.nbLancesDes{
					text-align: center;
					font-size: 1em;
				}

				#divBoutonLancer{
					/*background-color: grey;*/
					width: 350px;
					display: flex;
					justify-content: center;
				}

				#boutonLancer{
					margin-top:10px;
					padding:10px 20px;
					font-size: 1em;
					background-color: black;
					border:2px solid black;
					color: white;
					cursor: pointer;
					transition: background-color 0.2s, color 0.2s;
				}

				#boutonLancer:hover{
					background-color: white;
					color:black;
				}
			</style>

			<?php

		}


		public function form( $instance ) {
			if ( isset( $instance[ 'title' ] ) )
				$title = $instance[ 'title' ];
			else
				$title = __( 'Default Title', 'hstngr_widget_domain' );
			?>
			<p>
				<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
				<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
			</p>
			<?php
		}


		public function update( $new_instance, $old_instance ) {
			$instance = array();
			$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';
			return $instance;
		}
	}

		add_action('widgets_init', function () {
			register_widget('LancerDes');

		});

		include_once plugin_dir_path(__FILE__) . "/functions.php";