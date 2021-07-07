///
//  Generated code. Do not modify.
//  source: proto/instrument.proto
//
// @dart = 2.12
// ignore_for_file: annotate_overrides,camel_case_types,unnecessary_const,non_constant_identifier_names,library_prefixes,unused_import,unused_shown_name,return_of_invalid_type,unnecessary_this,prefer_final_fields

import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'history.pb.dart' as $1;

class Instrument extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'Instrument', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..a<$core.int>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'id', $pb.PbFieldType.O3)
    ..aOS(2, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..aOS(3, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'authorId', protoName: 'authorId')
    ..hasRequiredFields = false
  ;

  Instrument._() : super();
  factory Instrument({
    $core.int? id,
    $core.String? name,
    $core.String? authorId,
  }) {
    final _result = create();
    if (id != null) {
      _result.id = id;
    }
    if (name != null) {
      _result.name = name;
    }
    if (authorId != null) {
      _result.authorId = authorId;
    }
    return _result;
  }
  factory Instrument.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory Instrument.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  Instrument clone() => Instrument()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  Instrument copyWith(void Function(Instrument) updates) => super.copyWith((message) => updates(message as Instrument)) as Instrument; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static Instrument create() => Instrument._();
  Instrument createEmptyInstance() => create();
  static $pb.PbList<Instrument> createRepeated() => $pb.PbList<Instrument>();
  @$core.pragma('dart2js:noInline')
  static Instrument getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<Instrument>(create);
  static Instrument? _defaultInstance;

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
  $core.String get authorId => $_getSZ(2);
  @$pb.TagNumber(3)
  set authorId($core.String v) { $_setString(2, v); }
  @$pb.TagNumber(3)
  $core.bool hasAuthorId() => $_has(2);
  @$pb.TagNumber(3)
  void clearAuthorId() => clearField(3);
}

class PostInstrumentRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PostInstrumentRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOS(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'name')
    ..hasRequiredFields = false
  ;

  PostInstrumentRequest._() : super();
  factory PostInstrumentRequest({
    $core.String? name,
  }) {
    final _result = create();
    if (name != null) {
      _result.name = name;
    }
    return _result;
  }
  factory PostInstrumentRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PostInstrumentRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PostInstrumentRequest clone() => PostInstrumentRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PostInstrumentRequest copyWith(void Function(PostInstrumentRequest) updates) => super.copyWith((message) => updates(message as PostInstrumentRequest)) as PostInstrumentRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PostInstrumentRequest create() => PostInstrumentRequest._();
  PostInstrumentRequest createEmptyInstance() => create();
  static $pb.PbList<PostInstrumentRequest> createRepeated() => $pb.PbList<PostInstrumentRequest>();
  @$core.pragma('dart2js:noInline')
  static PostInstrumentRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PostInstrumentRequest>(create);
  static PostInstrumentRequest? _defaultInstance;

  @$pb.TagNumber(1)
  $core.String get name => $_getSZ(0);
  @$pb.TagNumber(1)
  set name($core.String v) { $_setString(0, v); }
  @$pb.TagNumber(1)
  $core.bool hasName() => $_has(0);
  @$pb.TagNumber(1)
  void clearName() => clearField(1);
}

class GetInstrumentByIdResoponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetInstrumentByIdResoponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instrument', subBuilder: Instrument.create)
    ..hasRequiredFields = false
  ;

  GetInstrumentByIdResoponse._() : super();
  factory GetInstrumentByIdResoponse({
    Instrument? instrument,
  }) {
    final _result = create();
    if (instrument != null) {
      _result.instrument = instrument;
    }
    return _result;
  }
  factory GetInstrumentByIdResoponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetInstrumentByIdResoponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetInstrumentByIdResoponse clone() => GetInstrumentByIdResoponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetInstrumentByIdResoponse copyWith(void Function(GetInstrumentByIdResoponse) updates) => super.copyWith((message) => updates(message as GetInstrumentByIdResoponse)) as GetInstrumentByIdResoponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetInstrumentByIdResoponse create() => GetInstrumentByIdResoponse._();
  GetInstrumentByIdResoponse createEmptyInstance() => create();
  static $pb.PbList<GetInstrumentByIdResoponse> createRepeated() => $pb.PbList<GetInstrumentByIdResoponse>();
  @$core.pragma('dart2js:noInline')
  static GetInstrumentByIdResoponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetInstrumentByIdResoponse>(create);
  static GetInstrumentByIdResoponse? _defaultInstance;

  @$pb.TagNumber(1)
  Instrument get instrument => $_getN(0);
  @$pb.TagNumber(1)
  set instrument(Instrument v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasInstrument() => $_has(0);
  @$pb.TagNumber(1)
  void clearInstrument() => clearField(1);
  @$pb.TagNumber(1)
  Instrument ensureInstrument() => $_ensure(0);
}

class PutInstrumentByIdRequest extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'PutInstrumentByIdRequest', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..aOM<Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instrument', subBuilder: Instrument.create)
    ..hasRequiredFields = false
  ;

  PutInstrumentByIdRequest._() : super();
  factory PutInstrumentByIdRequest({
    Instrument? instrument,
  }) {
    final _result = create();
    if (instrument != null) {
      _result.instrument = instrument;
    }
    return _result;
  }
  factory PutInstrumentByIdRequest.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory PutInstrumentByIdRequest.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  PutInstrumentByIdRequest clone() => PutInstrumentByIdRequest()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  PutInstrumentByIdRequest copyWith(void Function(PutInstrumentByIdRequest) updates) => super.copyWith((message) => updates(message as PutInstrumentByIdRequest)) as PutInstrumentByIdRequest; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static PutInstrumentByIdRequest create() => PutInstrumentByIdRequest._();
  PutInstrumentByIdRequest createEmptyInstance() => create();
  static $pb.PbList<PutInstrumentByIdRequest> createRepeated() => $pb.PbList<PutInstrumentByIdRequest>();
  @$core.pragma('dart2js:noInline')
  static PutInstrumentByIdRequest getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<PutInstrumentByIdRequest>(create);
  static PutInstrumentByIdRequest? _defaultInstance;

  @$pb.TagNumber(1)
  Instrument get instrument => $_getN(0);
  @$pb.TagNumber(1)
  set instrument(Instrument v) { setField(1, v); }
  @$pb.TagNumber(1)
  $core.bool hasInstrument() => $_has(0);
  @$pb.TagNumber(1)
  void clearInstrument() => clearField(1);
  @$pb.TagNumber(1)
  Instrument ensureInstrument() => $_ensure(0);
}

class GetInstrumentsResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetInstrumentsResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<Instrument>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'instruments', $pb.PbFieldType.PM, subBuilder: Instrument.create)
    ..hasRequiredFields = false
  ;

  GetInstrumentsResponse._() : super();
  factory GetInstrumentsResponse({
    $core.Iterable<Instrument>? instruments,
  }) {
    final _result = create();
    if (instruments != null) {
      _result.instruments.addAll(instruments);
    }
    return _result;
  }
  factory GetInstrumentsResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetInstrumentsResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetInstrumentsResponse clone() => GetInstrumentsResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetInstrumentsResponse copyWith(void Function(GetInstrumentsResponse) updates) => super.copyWith((message) => updates(message as GetInstrumentsResponse)) as GetInstrumentsResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetInstrumentsResponse create() => GetInstrumentsResponse._();
  GetInstrumentsResponse createEmptyInstance() => create();
  static $pb.PbList<GetInstrumentsResponse> createRepeated() => $pb.PbList<GetInstrumentsResponse>();
  @$core.pragma('dart2js:noInline')
  static GetInstrumentsResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetInstrumentsResponse>(create);
  static GetInstrumentsResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<Instrument> get instruments => $_getList(0);
}

class GetInstrumentHistoryEditResponse extends $pb.GeneratedMessage {
  static final $pb.BuilderInfo _i = $pb.BuilderInfo(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'GetInstrumentHistoryEditResponse', package: const $pb.PackageName(const $core.bool.fromEnvironment('protobuf.omit_message_names') ? '' : 'pj.sakuchin.percussion.proto'), createEmptyInstance: create)
    ..pc<$1.EditHistory>(1, const $core.bool.fromEnvironment('protobuf.omit_field_names') ? '' : 'history', $pb.PbFieldType.PM, subBuilder: $1.EditHistory.create)
    ..hasRequiredFields = false
  ;

  GetInstrumentHistoryEditResponse._() : super();
  factory GetInstrumentHistoryEditResponse({
    $core.Iterable<$1.EditHistory>? history,
  }) {
    final _result = create();
    if (history != null) {
      _result.history.addAll(history);
    }
    return _result;
  }
  factory GetInstrumentHistoryEditResponse.fromBuffer($core.List<$core.int> i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromBuffer(i, r);
  factory GetInstrumentHistoryEditResponse.fromJson($core.String i, [$pb.ExtensionRegistry r = $pb.ExtensionRegistry.EMPTY]) => create()..mergeFromJson(i, r);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.deepCopy] instead. '
  'Will be removed in next major version')
  GetInstrumentHistoryEditResponse clone() => GetInstrumentHistoryEditResponse()..mergeFromMessage(this);
  @$core.Deprecated(
  'Using this can add significant overhead to your binary. '
  'Use [GeneratedMessageGenericExtensions.rebuild] instead. '
  'Will be removed in next major version')
  GetInstrumentHistoryEditResponse copyWith(void Function(GetInstrumentHistoryEditResponse) updates) => super.copyWith((message) => updates(message as GetInstrumentHistoryEditResponse)) as GetInstrumentHistoryEditResponse; // ignore: deprecated_member_use
  $pb.BuilderInfo get info_ => _i;
  @$core.pragma('dart2js:noInline')
  static GetInstrumentHistoryEditResponse create() => GetInstrumentHistoryEditResponse._();
  GetInstrumentHistoryEditResponse createEmptyInstance() => create();
  static $pb.PbList<GetInstrumentHistoryEditResponse> createRepeated() => $pb.PbList<GetInstrumentHistoryEditResponse>();
  @$core.pragma('dart2js:noInline')
  static GetInstrumentHistoryEditResponse getDefault() => _defaultInstance ??= $pb.GeneratedMessage.$_defaultFor<GetInstrumentHistoryEditResponse>(create);
  static GetInstrumentHistoryEditResponse? _defaultInstance;

  @$pb.TagNumber(1)
  $core.List<$1.EditHistory> get history => $_getList(0);
}

