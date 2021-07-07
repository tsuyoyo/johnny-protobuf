///
//  Generated code. Do not modify.
//  source: proto/userService.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'user.pb.dart' as $5;
import 'area.pb.dart' as $0;

class SignupUserRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignupUserRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token')
    ..hasRequiredFields = false
  ;

  SignupUserRequest._() : super();
  factory SignupUserRequest({
    $core.String? token,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    return _result;
  }
  factory SignupUserRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignupUserRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignupUserRequest clone() => SignupUserRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignupUserRequest copyWith(void Function(SignupUserRequest) updates) => super.copyWith((message) => updates(message as SignupUserRequest)) as SignupUserRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignupUserRequest create() => SignupUserRequest._();
  SignupUserRequest createEmptyInstance() => create();
  static $pb.PbList<SignupUserRequest> createRepeated() => $pb.PbList<SignupUserRequest>();
  @$core.pragma('dart2js:noInline')
  static SignupUserRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignupUserRequest>(create);
  static SignupUserRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get token => $_getSZ(0);
  @$pb.TagNumber(1)
  set token($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class SignupUserResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'SignupUserResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$5.User>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: $5.User.create)
    ..hasRequiredFields = false
  ;

  SignupUserResponse._() : super();
  factory SignupUserResponse({
    $5.User? user,
  }) {
    final _result = create();
    if (user != null) {
      _result.user = user;
    }
    return _result;
  }
  factory SignupUserResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory SignupUserResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  SignupUserResponse clone() => SignupUserResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  SignupUserResponse copyWith(void Function(SignupUserResponse) updates) => super.copyWith((message) => updates(message as SignupUserResponse)) as SignupUserResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static SignupUserResponse create() => SignupUserResponse._();
  SignupUserResponse createEmptyInstance() => create();
  static $pb.PbList<SignupUserResponse> createRepeated() => $pb.PbList<SignupUserResponse>();
  @$core.pragma('dart2js:noInline')
  static SignupUserResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<SignupUserResponse>(create);
  static SignupUserResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $5.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($5.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $5.User ensureUser() => $_ensure(0);
}

class PostUserLoginRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostUserLoginRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'token')
    ..hasRequiredFields = false
  ;

  PostUserLoginRequest._() : super();
  factory PostUserLoginRequest({
    $core.String? token,
  }) {
    final _result = create();
    if (token != null) {
      _result.token = token;
    }
    return _result;
  }
  factory PostUserLoginRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostUserLoginRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostUserLoginRequest clone() => PostUserLoginRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostUserLoginRequest copyWith(void Function(PostUserLoginRequest) updates) => super.copyWith((message) => updates(message as PostUserLoginRequest)) as PostUserLoginRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostUserLoginRequest create() => PostUserLoginRequest._();
  PostUserLoginRequest createEmptyInstance() => create();
  static $pb.PbList<PostUserLoginRequest> createRepeated() => $pb.PbList<PostUserLoginRequest>();
  @$core.pragma('dart2js:noInline')
  static PostUserLoginRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostUserLoginRequest>(create);
  static PostUserLoginRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get token => $_getSZ(0);
  @$pb.TagNumber(1)
  set token($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasToken() => $_has(0);
  @$pb.TagNumber(1)
  void clearToken() => clearField(1);
}

class PostUserLoginResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostUserLoginResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$5.User>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: $5.User.create)
    ..hasRequiredFields = false
  ;

  PostUserLoginResponse._() : super();
  factory PostUserLoginResponse({
    $5.User? user,
  }) {
    final _result = create();
    if (user != null) {
      _result.user = user;
    }
    return _result;
  }
  factory PostUserLoginResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostUserLoginResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostUserLoginResponse clone() => PostUserLoginResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostUserLoginResponse copyWith(void Function(PostUserLoginResponse) updates) => super.copyWith((message) => updates(message as PostUserLoginResponse)) as PostUserLoginResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostUserLoginResponse create() => PostUserLoginResponse._();
  PostUserLoginResponse createEmptyInstance() => create();
  static $pb.PbList<PostUserLoginResponse> createRepeated() => $pb.PbList<PostUserLoginResponse>();
  @$core.pragma('dart2js:noInline')
  static PostUserLoginResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostUserLoginResponse>(create);
  static PostUserLoginResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $5.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($5.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $5.User ensureUser() => $_ensure(0);
}

class GetUserProfileResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetUserProfileResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$5.User>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: $5.User.create)
    ..aOM<$5.UserProfile>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userProfile', protoName: 'userProfile', subBuilder: $5.UserProfile.create)
    ..hasRequiredFields = false
  ;

  GetUserProfileResponse._() : super();
  factory GetUserProfileResponse({
    $5.User? user,
    $5.UserProfile? userProfile,
  }) {
    final _result = create();
    if (user != null) {
      _result.user = user;
    }
    if (userProfile != null) {
      _result.userProfile = userProfile;
    }
    return _result;
  }
  factory GetUserProfileResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetUserProfileResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetUserProfileResponse clone() => GetUserProfileResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetUserProfileResponse copyWith(void Function(GetUserProfileResponse) updates) => super.copyWith((message) => updates(message as GetUserProfileResponse)) as GetUserProfileResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetUserProfileResponse create() => GetUserProfileResponse._();
  GetUserProfileResponse createEmptyInstance() => create();
  static $pb.PbList<GetUserProfileResponse> createRepeated() => $pb.PbList<GetUserProfileResponse>();
  @$core.pragma('dart2js:noInline')
  static GetUserProfileResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetUserProfileResponse>(create);
  static GetUserProfileResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $5.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($5.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $5.User ensureUser() => $_ensure(0);

  @$pb.TagNumber(2)
  $5.UserProfile get userProfile => $_getN(1);
  @$pb.TagNumber(2)
  set userProfile($5.UserProfile v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasUserProfile() => $_has(1);
  @$pb.TagNumber(2)
  void clearUserProfile() => clearField(2);
  @$pb.TagNumber(2)
  $5.UserProfile ensureUserProfile() => $_ensure(1);
}

class PutUserProfileRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutUserProfileRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<$5.User>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'user', subBuilder: $5.User.create)
    ..aOM<$5.UserProfile>(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'userProfile', protoName: 'userProfile', subBuilder: $5.UserProfile.create)
    ..hasRequiredFields = false
  ;

  PutUserProfileRequest._() : super();
  factory PutUserProfileRequest({
    $5.User? user,
    $5.UserProfile? userProfile,
  }) {
    final _result = create();
    if (user != null) {
      _result.user = user;
    }
    if (userProfile != null) {
      _result.userProfile = userProfile;
    }
    return _result;
  }
  factory PutUserProfileRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutUserProfileRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutUserProfileRequest clone() => PutUserProfileRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutUserProfileRequest copyWith(void Function(PutUserProfileRequest) updates) => super.copyWith((message) => updates(message as PutUserProfileRequest)) as PutUserProfileRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutUserProfileRequest create() => PutUserProfileRequest._();
  PutUserProfileRequest createEmptyInstance() => create();
  static $pb.PbList<PutUserProfileRequest> createRepeated() => $pb.PbList<PutUserProfileRequest>();
  @$core.pragma('dart2js:noInline')
  static PutUserProfileRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutUserProfileRequest>(create);
  static PutUserProfileRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $5.User get user => $_getN(0);
  @$pb.TagNumber(1)
  set user($5.User v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasUser() => $_has(0);
  @$pb.TagNumber(1)
  void clearUser() => clearField(1);
  @$pb.TagNumber(1)
  $5.User ensureUser() => $_ensure(0);

  @$pb.TagNumber(2)
  $5.UserProfile get userProfile => $_getN(1);
  @$pb.TagNumber(2)
  set userProfile($5.UserProfile v) { setField(2, v); }
  @$pb.TagNumber(2)
  $core.bool hasUserProfile() => $_has(1);
  @$pb.TagNumber(2)
  void clearUserProfile() => clearField(2);
  @$pb.TagNumber(2)
  $5.UserProfile ensureUserProfile() => $_ensure(1);
}

class PutUserCityRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutUserCityRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  PutUserCityRequest._() : super();
  factory PutUserCityRequest({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory PutUserCityRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutUserCityRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutUserCityRequest clone() => PutUserCityRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutUserCityRequest copyWith(void Function(PutUserCityRequest) updates) => super.copyWith((message) => updates(message as PutUserCityRequest)) as PutUserCityRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutUserCityRequest create() => PutUserCityRequest._();
  PutUserCityRequest createEmptyInstance() => create();
  static $pb.PbList<PutUserCityRequest> createRepeated() => $pb.PbList<PutUserCityRequest>();
  @$core.pragma('dart2js:noInline')
  static PutUserCityRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutUserCityRequest>(create);
  static PutUserCityRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

class GetUserCityResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetUserCityResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$0.City>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cities', $pb.PbFieldType.PM, subBuilder: $0.City.create)
    ..hasRequiredFields = false
  ;

  GetUserCityResponse._() : super();
  factory GetUserCityResponse({
    $core.Iterable<$0.City>? cities,
  }) {
    final _result = create();
    if (cities != null) {
      _result.cities.addAll(cities);
    }
    return _result;
  }
  factory GetUserCityResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetUserCityResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetUserCityResponse clone() => GetUserCityResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetUserCityResponse copyWith(void Function(GetUserCityResponse) updates) => super.copyWith((message) => updates(message as GetUserCityResponse)) as GetUserCityResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetUserCityResponse create() => GetUserCityResponse._();
  GetUserCityResponse createEmptyInstance() => create();
  static $pb.PbList<GetUserCityResponse> createRepeated() => $pb.PbList<GetUserCityResponse>();
  @$core.pragma('dart2js:noInline')
  static GetUserCityResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetUserCityResponse>(create);
  static GetUserCityResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$0.City> get cities => $_getList(0);
}

