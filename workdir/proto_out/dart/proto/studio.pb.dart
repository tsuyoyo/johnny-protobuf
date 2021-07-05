///
//  Generated code. Do not modify.
//  source: proto/studio.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'area.pb.dart' as $0;
import 'history.pb.dart' as $1;

class Studio extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Studio', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id', $pb.PbFieldType.O3)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'url')
    ..aOM<$0.City>(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'city', subBuilder: $0.City.create)
    ..aOS(5, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'authorPlayerId', protoName: 'authorPlayerId')
    ..hasRequiredFields = false
  ;

  Studio._() : super();
  factory Studio({
    $core.int? id,
    $core.String? name,
    $core.String? url,
    $0.City? city,
    $core.String? authorPlayerId,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (name != null) {
      _result.name = name;
    }
    if (url != null) {
      _result.url = url;
    }
    if (city != null) {
      _result.city = city;
    }
    if (authorPlayerId != null) {
      _result.authorPlayerId = authorPlayerId;
    }
    return _result;
  }
  factory Studio.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Studio.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Studio clone() => Studio()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Studio copyWith(void Function(Studio) updates) => super.copyWith((message) => updates(message as Studio)) as Studio; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Studio create() => Studio._();
  Studio createEmptyInstance() => create();
  static $pb.PbList<Studio> createRepeated() => $pb.PbList<Studio>();
  @$core.pragma('dart2js:noInline')
  static Studio getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Studio>(create);
  static Studio? _defaultInstance;

  @$pb.TagNumber(1)
  $core.int get id => $_getIZ(0);
  @$pb.TagNumber(1)
  set id($core.int v) { $_setSignedInt32(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasId() => $_has(0);
  @$pb.TagNumber(1)
  void clearId() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get name => $_getSZ(1);
  @$pb.TagNumber(2)
  set name($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasName() => $_has(1);
  @$pb.TagNumber(2)
  void clearName() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get url => $_getSZ(2);
  @$pb.TagNumber(3)
  set url($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasUrl() => $_has(2);
  @$pb.TagNumber(3)
  void clearUrl() => clearField(3);

  @$pb.TagNumber(4)
  $0.City get city => $_getN(3);
  @$pb.TagNumber(4)
  set city($0.City v) { setField(4, v); }
  @$pb.TagNumber(4)
  $core.bool hasCity() => $_has(3);
  @$pb.TagNumber(4)
  void clearCity() => clearField(4);
  @$pb.TagNumber(4)
  $0.City ensureCity() => $_ensure(3);

  @$pb.TagNumber(5)
  $core.String get authorPlayerId => $_getSZ(4);
  @$pb.TagNumber(5)
  set authorPlayerId($core.String v) { $_setString(4, v); }
  @$pb.TagNumber(5)
  $core.bool hasAuthorPlayerId() => $_has(4);
  @$pb.TagNumber(5)
  void clearAuthorPlayerId() => clearField(5);
}

class GetStudioResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetStudioResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<Studio>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studios', $pb.PbFieldType.PM, subBuilder: Studio.create)
    ..hasRequiredFields = false
  ;

  GetStudioResponse._() : super();
  factory GetStudioResponse({
    $core.Iterable<Studio>? studios,
  }) {
    final _result = create();
    if (studios != null) {
      _result.studios.addAll(studios);
    }
    return _result;
  }
  factory GetStudioResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetStudioResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetStudioResponse clone() => GetStudioResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetStudioResponse copyWith(void Function(GetStudioResponse) updates) => super.copyWith((message) => updates(message as GetStudioResponse)) as GetStudioResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetStudioResponse create() => GetStudioResponse._();
  GetStudioResponse createEmptyInstance() => create();
  static $pb.PbList<GetStudioResponse> createRepeated() => $pb.PbList<GetStudioResponse>();
  @$core.pragma('dart2js:noInline')
  static GetStudioResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetStudioResponse>(create);
  static GetStudioResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Studio> get studios => $_getList(0);
}

class PostStudioRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostStudioRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'url')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'cityId', protoName: 'cityId')
    ..aOS(4, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'authorPlayerId', protoName: 'authorPlayerId')
    ..hasRequiredFields = false
  ;

  PostStudioRequest._() : super();
  factory PostStudioRequest({
    $core.String? name,
    $core.String? url,
    $core.String? cityId,
    $core.String? authorPlayerId,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    if (url != null) {
      _result.url = url;
    }
    if (cityId != null) {
      _result.cityId = cityId;
    }
    if (authorPlayerId != null) {
      _result.authorPlayerId = authorPlayerId;
    }
    return _result;
  }
  factory PostStudioRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostStudioRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostStudioRequest clone() => PostStudioRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostStudioRequest copyWith(void Function(PostStudioRequest) updates) => super.copyWith((message) => updates(message as PostStudioRequest)) as PostStudioRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostStudioRequest create() => PostStudioRequest._();
  PostStudioRequest createEmptyInstance() => create();
  static $pb.PbList<PostStudioRequest> createRepeated() => $pb.PbList<PostStudioRequest>();
  @$core.pragma('dart2js:noInline')
  static PostStudioRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostStudioRequest>(create);
  static PostStudioRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);

  @$pb.TagNumber(2)
  $core.String get url => $_getSZ(1);
  @$pb.TagNumber(2)
  set url($core.String v) { $_setString(1, v); }
  @$pb.TagNumber(2)
  $core.bool hasUrl() => $_has(1);
  @$pb.TagNumber(2)
  void clearUrl() => clearField(2);

  @$pb.TagNumber(3)
  $core.String get cityId => $_getSZ(2);
  @$pb.TagNumber(3)
  set cityId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasCityId() => $_has(2);
  @$pb.TagNumber(3)
  void clearCityId() => clearField(3);

  @$pb.TagNumber(4)
  $core.String get authorPlayerId => $_getSZ(3);
  @$pb.TagNumber(4)
  set authorPlayerId($core.String v) { $_setString(3, v); }
  @$pb.TagNumber(4)
  $core.bool hasAuthorPlayerId() => $_has(3);
  @$pb.TagNumber(4)
  void clearAuthorPlayerId() => clearField(4);
}

class PutStudioRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutStudioRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<Studio>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'studio', subBuilder: Studio.create)
    ..hasRequiredFields = false
  ;

  PutStudioRequest._() : super();
  factory PutStudioRequest({
    Studio? studio,
  }) {
    final _result = create();
    if (studio != null) {
      _result.studio = studio;
    }
    return _result;
  }
  factory PutStudioRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutStudioRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutStudioRequest clone() => PutStudioRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutStudioRequest copyWith(void Function(PutStudioRequest) updates) => super.copyWith((message) => updates(message as PutStudioRequest)) as PutStudioRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutStudioRequest create() => PutStudioRequest._();
  PutStudioRequest createEmptyInstance() => create();
  static $pb.PbList<PutStudioRequest> createRepeated() => $pb.PbList<PutStudioRequest>();
  @$core.pragma('dart2js:noInline')
  static PutStudioRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutStudioRequest>(create);
  static PutStudioRequest? _defaultInstance;

  @$pb.TagNumber(1)
  Studio get studio => $_getN(0);
  @$pb.TagNumber(1)
  set studio(Studio v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasStudio() => $_has(0);
  @$pb.TagNumber(1)
  void clearStudio() => clearField(1);
  @$pb.TagNumber(1)
  Studio ensureStudio() => $_ensure(0);
}

class GetStudioHistoryEditResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetStudioHistoryEditResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$1.EditHistory>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'history', $pb.PbFieldType.PM, subBuilder: $1.EditHistory.create)
    ..hasRequiredFields = false
  ;

  GetStudioHistoryEditResponse._() : super();
  factory GetStudioHistoryEditResponse({
    $core.Iterable<$1.EditHistory>? history,
  }) {
    final _result = create();
    if (history != null) {
      _result.history.addAll(history);
    }
    return _result;
  }
  factory GetStudioHistoryEditResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetStudioHistoryEditResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetStudioHistoryEditResponse clone() => GetStudioHistoryEditResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetStudioHistoryEditResponse copyWith(void Function(GetStudioHistoryEditResponse) updates) => super.copyWith((message) => updates(message as GetStudioHistoryEditResponse)) as GetStudioHistoryEditResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetStudioHistoryEditResponse create() => GetStudioHistoryEditResponse._();
  GetStudioHistoryEditResponse createEmptyInstance() => create();
  static $pb.PbList<GetStudioHistoryEditResponse> createRepeated() => $pb.PbList<GetStudioHistoryEditResponse>();
  @$core.pragma('dart2js:noInline')
  static GetStudioHistoryEditResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetStudioHistoryEditResponse>(create);
  static GetStudioHistoryEditResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$1.EditHistory> get history => $_getList(0);
}

