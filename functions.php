<?php

function LancerDes_register_assets(){
    wp_deregister_script('jquery');
    wp_enqueue_script(
        'jquery',
        'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',
        false,
        '3.3.1',
        true
    );

    wp_enqueue_script(
        'LancerDes',
        plugin_dir_url(
        __FILE__
        ) . '/script.js',
        array('jquery'),
        null,
        true
    );

    // wp_enqueue_style(
    //     'LancerDes',
    //     get_template_directory_uri() . '/style.css',
    //     array(),
    //     null
    // );
}

add_action('wp_enqueue_scripts', 'LancerDes_register_assets');