@extends('layouts.app')

@section('content')

    <sponsor-component></sponsor-component>
@include('home.intro')
@include('home.deal')
@include('home.achievement')
@include('home.work')
@include('home.client-response')
@include('home.home-blog')


@endsection